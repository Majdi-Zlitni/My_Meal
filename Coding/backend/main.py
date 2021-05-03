from typing import Optional
from fastapi import FastAPI , Request
import mysql.connector
import json
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()#snaana Instance mel fastapi mteena

origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#Inserting data from image file
@app.get("/fastfood")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM plat where categorie=\"In a rush\"")
    #resultat format json
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
@app.get("/trafood")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM plat where categorie=\"Traditional\"")
    #resultat format json
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
@app.get("/hfood")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM plat where categorie=\"Health\"")
    #resultat format json
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
#Send data of reclamation
@app.post("/reclam")
async def reclam(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    try:
        mycursor.execute(f"INSERT INTO `{body['type']}` ( `email`, `reclam`) VALUES ( '{body['email']}', '{body['reclam']}');")
        mydb.commit()
        return {"ok"}
    except:
        mydb.rollback()
        return ("no")
