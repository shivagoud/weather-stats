# Weather Report

## Installtion

### Assumptions
- Postgres is installed
- Python3 is installed (preferably with venv or alternatives)

### Setup database
- Create database with db details `"postgresql://applix:applix@localhost:5433/applix"`
- Create tables by running `python db_init.py`. Please note that incremental migrations not setup.

### Backend
- Python+FastApi stack
- Start the app `uvicorn main:app --reload`

### Frontend
- React+vite+MUI+recharts stack
- Start the app `yarn dev`

<img width="1512" alt="Screenshot 2025-03-10 at 6 34 43 PM" src="https://github.com/user-attachments/assets/27c2aae6-58b1-4ec7-815d-3c6578a53366" />
