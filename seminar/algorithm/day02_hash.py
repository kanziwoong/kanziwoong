import random

def genEmptyList(sizeOfList):
    emptyList = [0 for i in range(sizeOfList)]
    return emptyList

def genSuffledList(selectedNumberRange, selectedNumber):
    orgList = [i+1 for i in range(selectedNumberRange)]
    suffledList = []

    for i in range(selectedNumber):
        tmp = random.choice(orgList)
        suffledList.append(tmp)
        orgList.remove(tmp)
    return suffledList

def h1(k, sizeOfList):
    return k % sizeOfList

def h2(k, primeNumber):
    return 1 + (k % primeNumber)

def h(k, i, sizeOfList, primeNumber):
    return (h1(k, sizeOfList) + i*h2(k, primeNumber)) % sizeOfList

def calFillingCount(emptyList):
    fillingCount = 0
    for i in range(len(emptyList)):
        if emptyList[i] != 0:
            fillingCount +=1
    return fillingCount


# Running Code
selectedNumberRange = 1300
selectedNumber = 1000
sizeOfList = 1021
primeNumber = 11

emptyList = genEmptyList(sizeOfList)
# print (emptyList)

suffledList = genSuffledList(selectedNumberRange, selectedNumber)
# print ("Input Numbers :", suffledList)


totalCollisionCount = 0

for k in suffledList:
    i = 0
    currentIdx = h(k, i, sizeOfList, primeNumber)
    while (i != -1):
        if emptyList[currentIdx] == 0:
            emptyList[currentIdx] = k
            if i != 0:
                # print ("\tIdx & Value : %d & %d" % ( suffledList.index(k), k ) )
                # print ("\t\tCollision Count : %d" % i)
                # print ("\t\tFilling Ratio : %0.2d%%" % ((calFillingCount(emptyList) / len(emptyList)) * 100) )
                totalCollisionCount += i
            i = -1
        else:
            i += 1
            currentIdx = h(k, i, sizeOfList, primeNumber)

# print ("Print HashTable :", emptyList)
print ("Total Collsion Number :", totalCollisionCount)
