from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    id: Optional[int]
    username: str
    email: str
    hashed_password: str
