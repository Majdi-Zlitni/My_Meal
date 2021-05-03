from typing import Optional
from fastapi import FastAPI, Request
import mysql.connector
import json
from starlette.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()
origins = [
    "http://localhost:4200/"
    
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/add")
async def add(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")#Connectiw ala el BD mteena
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    try:
        mycursor.execute(f"INSERT INTO plat ( `nom`, `categorie`, `prix` , `img`, `resto`, `description`) VALUES ( '{body['nom']}', '{body['categorie']}', '{body['prix']}'  , '{body['img']}', '{body['resto']}', '{body['description']}');")
        mydb.commit()#commit bech nsajlou fel BD
        return {"ok"}
    except:
        mydb.rollback
        return {"non"}
        app.get("/meals")#hedhi GET
        
@app.post("/modify")
async def modify(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")#Connectiw ala el BD mteena
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    try:
        mycursor.execute(f"update plat set nom='{body['nom']}', prix='{body['prix']}'  , description='{body['description']}' where id={body['id']};")
        mydb.commit()#commit bech nsajlou fel BD
        return {"ok"}
    except:
        mydb.rollback
        return {"non"}
        app.get("/meals")#hedhi GET

@app.post("/modifycommand")
async def modifycommand(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")#Connectiw ala el BD mteena
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    print(body)
    try:
        mycursor.execute(f"update platordre set quantite='{body['quantite']}', price='{body['price']}'  where id='{body['id']}'and idcommande='{body['idcommande']}';")
        mydb.commit()#commit bech nsajlou fel BD
        return {"ok"}
    except:
        mydb.rollback
        return {"non"}
        app.get("/meals")#hedhi GET

@app.post("/delete")
async def delete(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")#Connectiw ala el BD mteena
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    print (body['id'])
    try:
        mycursor.execute(f"delete from plat  where id={body['id']}")
        mydb.commit()#commit bech nsajlou fel BD
        return {"ok"}
    except:
        mydb.rollback
        return {"non"}
        app.get("/meals")#hedhi GET

@app.post("/deletecommand")
async def deletecommand(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")#Connectiw ala el BD mteena
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    print (body)
    try:
        mycursor.execute(f"delete from platordre  where id={body['id']} and idcommande={body['idcommand']}")
        mydb.commit()#commit bech nsajlou fel BD
        return {"ok"}
    except:
        mydb.rollback
        return {"non"}
        app.get("/meals")#hedhi GET

@app.post("/deletecommand/all")
async def deletecommandall(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")#Connectiw ala el BD mteena
    mycursor = mydb.cursor()#snaana cursor ala el db 
    body = json.loads(await request.body())#khdhina el body mtaa el requete post mteena w radineh objet json
    #executina instruction mtaa insert w ki hachtna b variable mel body il suffit naamlou {body['{esm_el_attribut}']}
    print (body)
    try:
        mycursor.execute(f"delete from commande  where  idcommande={body['idcommand']}")
        mydb.commit()#commit bech nsajlou fel BD
        return {"ok"}
    except:
        mydb.rollback
        return {"non"}
        app.get("/meals")#hedhi GET

@app.get("/command")
def command(idcommande:int):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT plat.id,nom,img,quantite,prix,price FROM plat , platordre WHERE platordre.idcommande= '{idcommande}' AND  platordre.id = plat.id")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/meals")
def gets():#ken nheb naadi query param juste fi west el () nekteb b syntax hedha {esm_el_var}:{type} [EX : gets(id:int) ======> donc fel requete ki naamel get l http://127.0.0.1:8000/gets?id=4 el variable id mte3i fi west el code bech tkoun el valeur mte3ha 4]
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "mymeal")
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM plat")
    #ena fel resultat eli bech yraja7ouli el api nhebou yrajaali json w assemi el attributs mte3ou houma assemi les attributs mte3i eli f table mtaa el SQL
    row_headers=[x[0] for x in mycursor.description] #EL CODE hedha dima yetaawed donc copy paste w mataabech rouhek
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
    
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
        app.get("/meals")

