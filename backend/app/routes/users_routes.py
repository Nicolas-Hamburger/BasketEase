from fastapi import APIRouter, HTTPException
from controllers.users_controllers import UserControllers
from models.users_models import Users

router = APIRouter()
n_user = UserControllers()

@router.get("/get/users")
async def get_users():
    resul = n_user.get_users()
    return resul

@router.get("/get/users/{userId}")
async def get_users_id(userId: int):
    resul = n_user.get_users_id(userId)
    return resul

@router.post("/post/users")
async def post_users(nuser: Users):
    resul = n_user.post_users(nuser)
    return resul    

@router.put("/update/users/{userId}")
async def update_users(userId: int, nuser: Users):
    resul = n_user.update_users(userId, nuser)
    return resul

@router.delete("/delete/users/{userId}")
async def delete_users(userId: int):
    resul = n_user.delete_users(userId)
    return resul