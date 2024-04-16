import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.users_routes import router as users_router
from routes.sale_routes import router as sale_router
from routes.products_routes import router as products_router
from routes.inventory_routes import router as inventory_router

app = FastAPI()

origins = [
    "https://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)
app.include_router(sale_router)
app.include_router(products_router)
app.include_router(inventory_router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)    