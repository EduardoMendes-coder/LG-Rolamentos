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


def cast_is_active(is_active):
    if is_active is not None:
        is_active = is_active.lower()

        if is_active == 'true':
            is_active = True
        elif is_active == 'false':
            is_active = False

    return is_active


def strtime_to_datetime(str_time):
    if str_time and isinstance(str_time, str):
        try:
            formatted_time = datetime.strptime(str_time, '%Y-%m-%d')
        except Exception as e:
            print(e)
            return str_time
        else:
            return formatted_time
