AdjM = [
            [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
            [ 0, 0, 8, 0, 0, 0, 0, 11, 0 ],
            [ 0, 0, 0, 7, 0, 4, 0, 0, 2 ],
            [ 0, 0, 0, 0, 9, 14, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 10, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 2, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 1, 6 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 7 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        ]

def M(i, j):
    if i <= j:
        return AdjM[i][j]
    else:
        return AdjM[j][i]

listWeight = list( set([ M(i, j) for i in range(len(AdjM))
                                 for j in range(i+1, len(AdjM)) if M(i, j) != 0 ]) )

def whereV(edge):
    return [ (i, j) for i in range(len(AdjM))
                    for j in range(i+1, len(AdjM)) if M(i, j) == edge ]

setV = set()
sumWeight = 0
for i in range(len(listWeight)):
    L = whereV(listWeight[i])
    for j in L:
        (l, m) = j
        setTmp = set([l, m])
        if len(setV & setTmp) == 2 : continue
        setV.add(l)
        setV.add(m)
        sumWeight += M(l, m)

print( "Sum of Weight :", sumWeight )





















