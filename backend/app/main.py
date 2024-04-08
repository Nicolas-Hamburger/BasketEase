from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return{"Hello": "Word"}

@app.get("/items/{item_id}")
def read_item (item_id: 22):
    return {"Item_id:": item_id}