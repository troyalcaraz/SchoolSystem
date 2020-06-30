from flask import Flask, request, make_response, jsonify, render_template
from flask_cors import CORS

from SchoolSystem.data.logger import get_logger

import SchoolSystem.data.mongo as db

_log = get_logger(__name__)

app = Flask("__main__")