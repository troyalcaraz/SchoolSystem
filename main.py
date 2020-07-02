from flask import Flask, request, make_response, jsonify, render_template
from flask_cors import CORS

from SchoolSystem.data.logger import get_logger
from SchoolSystem.users.model import User
import SchoolSystem.data.mongo as db

_log = get_logger(__name__)

app = Flask("__main__")
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
# app.json_encoder = UserEncoder

@app.route('/users', methods={'GET', 'POST', 'DELETE'})
def login():
    if request.method == 'POST':
        _log.debug("In POST")
        # getting the user information from the form and getting the information from the db
        _log.debug(request.json['username'])
        temp = request.json['username']
        _log.debug(temp)
        user = db.login(temp)
        _log.debug(user)
        if user:
        #     # Generate our token
        #     auth_token = user.encode_auth_token()
        #     _log.debug(dir(auth_token))
            # response = make_response(jsonify(user))
            # response.set_cookie('authorization', auth_token.decode())
            return user.to_dict(), 200
        return {}, 401
    # elif request.method == 'GET':
    #     # auth_token = request.cookies.get('authorization')
    #     if auth_token:
    #         _log.debug(auth_token)
    #         _log.debug(User.decode_auth_token(auth_token))
    #         return jsonify(db.get_user_by_id(User.decode_auth_token(auth_token))), 200
    #     else:
    #         return {}, 401