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