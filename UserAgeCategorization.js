
def categorize_age(age):
    if age < 5:
        return "Toddler (under 5 years)"
    elif 5 <= age <= 12:
        return "Child (5-12 years)"
    elif 13 <= age <= 19:
        return "Teenager (13-19 years)"
    elif 20 <= age <= 35:
        return "Young Adult (20-35 years)"
    elif 36 <= age <= 60:
        return "Middle-Aged (36-60 years)"
    else:
        return "Senior (over 60 years)"

try:
    age = int(input("Enter your age: "))
    category = categorize_age(age)
    print(f"You belong to the category: {category}")
except ValueError:
    print("Please enter a valid numerical age.")




3
