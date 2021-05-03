from typing import Optional
from fastapi import FastAPI , Request
import mysql.connector
import json
from starlette.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()#snaana Instance mel fastapi mteena

origins = ["*"]

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
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")#Connectiw ala el BD mteena
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())
    #khdhina el body mtaa el requete post mteena w radineh objet json
    print(body)
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    try:
        mycursor.execute(f"INSERT INTO reclamation ( email, reclam,dataereclam) VALUES ( '{body['email']}', '{body['reclam']}');")
        mydb.commit()#commit bech nsajlou fel BD
        return {"ok"}
    except:
        mydb.rollback
        return {"non"}
        app.get("/meals")#hedhi GET