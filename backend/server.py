from flask import Flask,request,jsonify
from flask_cors import CORS
import json

app=Flask(__name__)
CORS(app)

dataFilePath='../frontend/public/db/data.json'

class Recorder:
    def __init__(self,targetAmount,period,filePath):
        with open(filePath,'r') as file:
            data=json.load(file)
        self.filePath=filePath

        self.targetAmount=targetAmount
        self.dailyTargetAmount=targetAmount/period
        self.ExpectedAmount=0
        self.currentAmount=0
        self.remainingAmount=0
        self.completedAmountPctg=0
        self.deficitAmount=0

        self.targetPeriod=period
        self.currentPeriod=0
        self.remainingPeriod=0
        self.completedPeriodPctg=0
        
        self.spending=0
        self.saveSpendRatio=0
        
        self.records=[]
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

        mpesaChange=track_change('mpesa')
        mshwariChange=track_change('mshwari')
        lockedChange=track_change('locked')

        volumeChange=mpesaChange+mshwariChange+lockedChange

        record={
            'date':date,
            'mpesa':{'balance':mpesaBalance,'change':mpesaChange},
            'mshwari':{'balance':mshwariBalance,'change':mshwariChange},
            'locked':{'balance':lockedBalance,'change':lockedChange}
            }
        
        self.records.append(record)


        self.currentPeriod+=1
        self.remainingPeriod=self.targetPeriod-self.currentPeriod
        self.completedPeriodPctg=(self.currentPeriod/self.targetPeriod)*100

        self.ExpectedAmount=self.dailyTargetAmount*self.currentPeriod
        self.currentAmount=mpesaBalance+mshwariBalance+lockedBalance
        self.remainingAmount=self.targetAmount-self.currentAmount
        self.completedAmountPctg=(self.currentAmount/self.targetAmount)*100
        self.deficitAmount=0 if self.currentAmount>self.ExpectedAmount else self.ExpectedAmount-self.currentAmount

        if volumeChange<0:
            self.spending+=volumeChange

        self.saveSpendRatio=self.currentAmount/self.spending

        self.data['targetAmount']=self.targetAmount
        self.data['dailyTargetAmount']=self.dailyTargetAmount
        self.data['expectedAmount']=self.ExpectedAmount
        self.data['currentAmount']=self.currentAmount
        self.data['remainingAmount']=self.remainingAmount
        self.data['completedAmountPctg']=self.completedAmountPctg
        self.data['deficitAmount']=self.deficitAmount

        self.data['targetPeriod']=self.targetPeriod
        self.data['currentPeriod']=self.currentPeriod
        self.data['remainingPeriod']=self.remainingPeriod
        self.data['completedPeriodPctg']=self.completedPeriodPctg

        self.data['spending']=self.spending
        self.data['saveSpendRatio']=self.saveSpendRatio

        self.data['records']=self.records

        with open(self.filePath,'w') as file:
            json.dump(self.data,file,indent=True,separators=(',',':'))