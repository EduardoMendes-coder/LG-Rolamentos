from backend.classes.model.sex import Sex


def validate(sex):
    all_sex = (
        Sex.MALE.value,
        Sex.FEMALE.value,
        Sex.OTHER.value
    )

    return True if sex.lower() in all_sex else False

