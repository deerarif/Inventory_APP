import sys, os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from model.inventory import add_inv
from model.inventory import retrive_all


retrive_all()
