'''Modularization of Mongo data access
    Define all of our CRUD (Create, Read, Update, and Delete)
    in this file  to separate those concerns'''

import os
import sys
import getpass
import pymongo

from SchoolSystem.users.model import User, Admin, Teacher, Student
from SchoolSystem.data.logger import get_logger

_log = get_logger(__name__)

try:
    _scl = pymongo.MongoClient(os.environ.get('MONGO_URI')).project2
except:
    _log.exception('Could not connect to Mongo')
    raise

def get_user_by_username(username):
    return _scl.users.find_one({'username': username})

def get_grades_by_username(username):
    user_dict = _scl.users.find_one({'username': username})
    grades = []
    for grade in user_dict.grades:
        grades.append(grade)
    return grades


def _get_id():
    '''Retrieves the next id in the database and increments it'''
    return _scl.counter.find_one_and_update({'_id': 'UNIQUE_COUNT'},
                                            {'$inc': {'count': 1}},
                                            return_document=pymongo.ReturnDocument.AFTER)['count']

if __name__ == '__main__':
    _log.info('Running Mongo script: dropping collections from project2 database')
    _log.info(_scl.list_collection_names())
    _scl.users.drop()


    _scl.counter.insert_one({'_id': 'UNIQUE_COUNT', 'count': 0})