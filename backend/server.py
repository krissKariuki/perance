from flask import Flask,request,jsonify
from flask_cors import CORS
import json

app=Flask(__name__)
CORS(app)

dataFilePath='data.json'

class Recorder:
    def __init__(self,targetAmount,period,filePath):
        with open(filePath,'r') as file:
            data=json.load(file)
        self.filePath=filePath

        self.targetAmount=data.get('targetAmount',targetAmount)
        self.dailyTargetAmount=data.get('dailyTargetAmount',targetAmount/period)
        self.expectedAmount=data.get('expectedAmount',0)
        self.currentAmount=data.get('currentAmount',0)
        self.remainingAmount=data.get('remainingAmount',0)
        self.completedAmountPctg=data.get('completedAmountPctg',0)
        self.deficitAmount=data.get('deficitAmount',0)

        self.targetPeriod=data.get('period',period)
        self.currentPeriod=data.get('currentPeriod',0)
        self.remainingPeriod=data.get('remainingPeriod',0)
        self.completedPeriodPctg=data.get('completedPeriodPctg',0)
        
        self.spending=data.get('spending',0)
        self.saveSpendRatio=data.get('saveSpendRatio',0)
        
        self.records=data.get('records',[])
        self.data=data

    def update(self,record):

        def track_change(key):
            change=0
            previousRecord=0

            if(len(self.records)<=0):
                return change
            
            else:
                previousRecord=self.records[len(self.records)-1]
                change=record[key]-previousRecord[key]['balance']
            
            return change
        
        date=record['date']
        mpesaBalance=record['mpesa']
        mshwariBalance=record['mshwari']
        lockedBalance=record['locked']
        volumeBalance=mpesaBalance+mshwariBalance+lockedBalance
        
        mpesaChange=track_change('mpesa')
        mshwariChange=track_change('mshwari')
        lockedChange=track_change('locked')
        volumeChange=mpesaChange+mshwariChange+lockedChange

        record={
            'date':date,
            'mpesa':{'balance':mpesaBalance,'change':mpesaChange},
            'mshwari':{'balance':mshwariBalance,'change':mshwariChange},
            'locked':{'balance':lockedBalance,'change':lockedChange},
            'volume':{'balance':volumeBalance,'change':volumeChange}
            }
        
        self.records.append(record)


        self.currentPeriod+=1
        self.remainingPeriod=self.targetPeriod-self.currentPeriod
        self.completedPeriodPctg=(self.currentPeriod/self.targetPeriod)*100

        self.expectedAmount=self.dailyTargetAmount*self.currentPeriod
        self.currentAmount=volumeBalance
        self.remainingAmount=self.targetAmount-self.currentAmount
        self.completedAmountPctg=(self.currentAmount/self.targetAmount)*100
        self.deficitAmount=0 if self.currentAmount>self.expectedAmount else self.expectedAmount-self.currentAmount

        if volumeChange<0:
            self.spending+=abs(volumeChange)
            
        self.saveSpendRatio=self.currentAmount if self.spending<=0 else (self.currentAmount/self.spending)

        self.data['targetAmount']=self.targetAmount
        self.data['dailyTargetAmount']=round(self.dailyTargetAmount,2)
        self.data['expectedAmount']=round(self.expectedAmount,2)
        self.data['currentAmount']=round(self.currentAmount,2)
        self.data['remainingAmount']=round(self.remainingAmount,2)
        self.data['completedAmountPctg']=round(self.completedAmountPctg,2)
        self.data['deficitAmount']=round(self.deficitAmount,2)

        self.data['targetPeriod']=self.targetPeriod
        self.data['currentPeriod']=self.currentPeriod
        self.data['remainingPeriod']=self.remainingPeriod
        self.data['completedPeriodPctg']=round(self.completedPeriodPctg,2)

        self.data['spending']=round(self.spending,2)
        self.data['saveSpendRatio']=round(self.saveSpendRatio,2)

        self.data['records']=self.records

        with open(self.filePath,'w') as file:
            json.dump(self.data,file,indent=True,separators=(',',':'))

myRecord=Recorder(50000,365,dataFilePath)

@app.route('/perance',methods=['POST'])
def handle_post():
    record=request.get_json()
    myRecord.update(record)
    
    return 'recorded an update'

@app.route('/perance',methods=['GET'])
def handle_get():
    data=myRecord.data
    
    return jsonify(data)

app.run(debug=True,host='localhost',port=8000)