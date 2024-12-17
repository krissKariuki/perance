# import json

# dataFile='../db/data.json'
# newRecordsFile='../db/newRecords.json'

# def formatData(dataFile,newRecordsFile):
#     with open(dataFile,'r+') as datafile,open(newRecordsFile,'r') as recordsfile:
#         originalData=json.load(datafile)
#         newRecords=json.load(recordsfile)

#         originalData['records']=newRecords

#         json.dump(originalData,datafile,indent=True,separators=(',',':'))



# print(formatData(dataFile,newRecordsFile))