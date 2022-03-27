from datetime import datetime


def cast_salary(salary):
    try:
        new_salary = float(salary)
    except Exception as e:
        return salary
    else:
        return new_salary


def cast_hired_at(hired_at):
    try:
        new_hired_at = datetime.strptime(hired_at, '%Y-%m-%d %H:%M:%S-%f')
    except Exception as e:
        return hired_at
    else:
        return new_hired_at


def cast_age(age):
    try:
        new_age = int(age)
    except Exception as e:
        return age
    else:
        return new_age
