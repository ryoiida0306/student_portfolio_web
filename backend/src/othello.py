

class Othello:
    
    def __init__(self):
        self.Table = [[0] * 8 for i in range(8)] 
        self.Table[3][3] = -1
        self.Table[4][4] = -1
        self.Table[3][4] = 1
        self.Table[4][3] = 1
        self.turn = 1
        self.black = 2
        self.white = 2
        self.finish = False
        self.winner = 0
        self.returnTable = add_table(self.Table,canTable(self.Table,self.turn))

    # オセロの盤面を返す。
    # 白ならば-1、黒ならば1、空ならば0、置ける場所ならば2を返す。
    # return self.Table, self.turn self.black self.white self.finish self.winner
    def get_next_board(self, data):
        originx = data["x"]
        originy = data["y"]
        print(data)
        # リセット
        if( originx == -1 and originy == -1):
            self.__init__()
            return {
                "table": self.returnTable,
                "turn": self.turn,
                "black": self.black,
                "white": self.white,
                "isFinished": self.finish,
                "winner": self.winner
            }, 200
        
        # 置ける場所がない場合
        if(not(is_can(canTable(self.Table,1)) or is_can(canTable(self.Table,-1)))) :
            print(is_can(canTable(self.Table,1)))
            print(is_can(canTable(self.Table,-1)))
            print(canTable(self.Table,1))
            print(canTable(self.Table,-1))
            return {
                "table": self.returnTable,
                "turn": self.turn,
                "black": self.black,
                "white": self.white,
                "isFinished": self.finish,
                "winner": self.winner,
                "error": "置ける場所がありません。"
            }, 200
        
        # 置けるかどうかの判定
        if(canTable(self.Table,self.turn)[originx][originy] == 0) :
            return {
                "table": self.returnTable,
                "turn": self.turn,
                "black": self.black,
                "white": self.white,
                "isFinished": self.finish,
                "winner": self.winner,
                "error": "その場所には置けません。"
            }, 200
        
        # 石を置く
        self.Table = reverse(self.Table,self.turn,originx,originy)
        self.turn = change(self.turn)
        self.returnTable = add_table(self.Table,canTable(self.Table,self.turn))

        if(not is_can(canTable(self.Table,self.turn))) :
            self.turn = change(self.turn)
            self.returnTable = add_table(self.Table,canTable(self.Table,self.turn))
            if(not is_can(canTable(self.Table,self.turn))) :
                self.finish = True
                self.black, self.white, self.winner = nums_and_winner(self.Table)
                return {
                    "table": self.returnTable,
                    "turn": self.turn,
                    "black": self.black,
                    "white": self.white,
                    "isFinished": self.finish,
                    "winner": self.winner,
                    "error": "二人とも置ける場所がありません。"
                }, 200

        self.black, self.white, self.winner = nums_and_winner(self.Table)
        return {
                "table": self.returnTable,
                "turn": self.turn,
                "black": self.black,
                "white": self.white,
                "isFinished": self.finish,
                "winner": self.winner,
                "error": "正常です。"
            }, 200
        


        # while( is_can(canTable(Table,1)) or is_can(canTable(Table,-1))) :
        # print("{}の番".format(toS(turn)))
        
        # canT = canTable(Table,turn)
        # if(not is_can(canT)) :
        #     print("{}はおけません．パスします．".format(toS(turn)))
        #     turn = change(turn)
        # print_board(Table)
        # x, y = put()
        # while(canT[x][y] == 0) :
        #     print("({},{})にはおけません．おける場所を選択してください．".format(x+1,y+1))
        #     print_board(canT)
        #     x,y = put()
        # Table = reverse(Table,turn,x,y)
        # turn = change(turn)
    
    # print_result(Table)


# def print_board(Table) :
#     for i in range(13) :
#         print("－", end = "")
#     print()
#     for i in Table :
#         for j in i :
#             cell = "　"
#             if(j == 1) :
#                 cell = "✕ "
#             elif(j == -1) :
#                 cell = "◯ "
            
#             print("|{}".format(cell) , end ="")
#         print("|")
#     for i in range(13) :
#         print("－", end = "")
#     print()

def add_table(Table1,Table2) :
    newTable = [[0] * 8 for i in range(8)] 
    for i in range(8) :
        for j in range(8) :
            newTable[i][j] = Table1[i][j] + Table2[i][j]
    return newTable

def blacknum(Table) :
    blacknum = 0
    for i in range(8) :
        for j in range(8) :
            if(Table[i][j] == 1) :
                blacknum += 1
    return blacknum

def whitenum(Table) :
    whitenum = 0
    for i in range(8) :
        for j in range(8) :
            if(Table[i][j] == -1) :
                whitenum += 1
    return whitenum

def nums_and_winner(Table) :
    blacknum = 0
    whitenum = 0
    for i in range(8) :
        for j in range(8) :
            if(Table[i][j] == 1) :
                blacknum += 1
            if(Table[i][j] == -1) :
                whitenum += 1
    winner = 0
    if(blacknum > whitenum) :
        winner = 1
    if(blacknum < whitenum) :
        winner = -1
    return blacknum, whitenum, winner

def inTable(x,y) :
    if((0 <= x and x <= 7 ) and (0 <= y and y <= 7)) :
        return 1
    return 0

def change(turn) :
    return -turn

def cancheck(Table,turn,originx,originy) :
    check = 0
    if(Table[originx][originy] == 0) :
        for dx , dy in [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]] :
            x = originx+dx
            y = originy+dy
            if(not(inTable(x,y))) :
                continue
            if(Table[x][y] != change(turn)) :
                continue
            while(Table[x][y] == change(turn)) :
                x += dx
                y += dy
                if(not(inTable(x,y))) :
                    break
            if(not(inTable(x,y))) :
                continue
            if(Table[x][y] == turn) :
                check = 1
            if(check) :
                break
    return check

def canTable(Table,turn) :
    canT = [[0] * 8 for i in range(8)] 
    for i in range(8) :
        for j in range(8) :
            canT[i][j] = cancheck(Table,turn,i,j) * 2
    return canT

def is_can(Table) :
    can = 0
    for i in range(8) :
        for j in range(8) :
            if(Table[i][j] == 2) :
                can = 1
    return can

def toS(turn) :
    if(turn == 1) :
        return "黒"
    if(turn == -1) :
        return "白"
    return "空"

def put() :
    x = -1
    y = -1
    while(1) :
        print("何行目何列目かを教えてください(例： $2 6)")
        x , y = input().split()
        x = int(x)
        y = int(y)
        x -= 1
        y -= 1
        if(inTable(x,y)) :
            break
        print("マスの範囲を超えています．もう一度入力してください．")
    return x,y

def reverse(Table,turn,originx,originy) :
    newTable = [[0] * 8 for i in range(8)] 
    for i in range(8) :
        for j in range(8) :
            newTable[i][j] = Table[i][j]
    for dx , dy in [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]] :
        x = originx+dx
        y = originy+dy
        if(not(inTable(x,y))) :
            continue
        if(Table[x][y] != change(turn)) :
            continue
        while(Table[x][y] == change(turn)) :
            x += dx
            y += dy
            if(not(inTable(x,y))) :
                break
        if(not(inTable(x,y))) :
            continue
        if(Table[x][y] == turn) :
            dx = -dx
            dy = -dy
            while(x != originx or y != originy) :
                x += dx
                y += dy
                newTable[x][y] = turn
    return newTable

# def print_result(Table) :
#     print_board(Table)
#     blacknum = 0
#     whitenum = 0
#     for i in range(8) :
#         for j in range(8) :
#             if(Table[i][j] == 1) :
#                 blacknum += 1
#             if(Table[i][j] == -1) :
#                 whitenum += 1
#     win = 0
#     if(blacknum > whitenum) :
#         win = 1
#     if(blacknum < whitenum) :
#         win = -1
    
#     print("黒：白＝{}：{}".format(blacknum,whitenum))
#     if(win != 0) :
#         print("{}の勝ち".format(toS(win)))
#     else :
#         print("引き分け")

    

