#-*- coding: utf-8 -*-
import random, sys, time

# Generating Suffled List
def genSuffledList(number):
    orgList = [i+1 for i in range(number)]
    suffledList = []

    for i in range(number):
        tmp = random.choice(orgList)
        suffledList.append(tmp)
        orgList.remove(tmp)
    return suffledList

# Swap Function
def swap(list, i, j):
    tmp = list[i]
    list[i] = list[j]
    list[j] = tmp


# SelectionSort Algorithm
def selectionSort(suffledList):
    selectionList = suffledList[:]
    for i in range(len(selectionList)-1):
        positionOfMin = i
        for j in range(i, len(selectionList)):
            if selectionList[positionOfMin] > selectionList[j]:
                positionOfMin = j
        swap(selectionList, i, positionOfMin)
    return selectionList


# InsertionSort Algorithm
def insertionSort(suffledList):
    insertionList = suffledList[:]
    for j in range(1, len(insertionList)):
        key = insertionList[j]
        i = j-1
        while (i >= 0 and insertionList[i] > key):
            insertionList[i+1] = insertionList[i]
            i = i-1
        insertionList[i+1] = key
    return insertionList


# QuickSort Algorithm
# https://haandol.wordpress.com/2014/10/10/%ED%80%B5%EC%A0%95%EB%A0%AC-in-python/
def quickSort(L):
    if len(L) < 2:
        return L

    pivot = random.choice(L)
    small = [el for el in L if el < pivot]
    medium = [el for el in L if el == pivot]
    large = [el for el in L if pivot < el]
    return quickSort(small) + medium + quickSort(large)


# Test Set
def testByTime(number):
    start = time.time()
    suffledList = genSuffledList(number)
    genSuffledListTime = time.time() - start
    start = time.time()
    selectionSort(suffledList)
    selectionSortTime = time.time() - start
    start = time.time()
    insertionSort(suffledList)
    insertionSortTime = time.time() - start
    start = time.time()
    quickSort(suffledList)
    quickSortTime = time.time() - start
    print("When number = %d," % number)
    print("\tgenSuffledListTime\t: %f\n\tselectionSortTime\t: %f\n\tinsertionSortTime\t: %f\n\tquickSortTime\t\t: %f\n" % (genSuffledListTime, selectionSortTime, insertionSortTime, quickSortTime))

testByTime(1000)
testByTime(10000)
testByTime(100000)
testByTime(1000000)
