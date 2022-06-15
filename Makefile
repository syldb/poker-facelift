serve:
	FLASK_ENV=development python server.py

serve-prod:
	FLASK_ENV=production python server.py

test:
	pytest .

lint:
	flake8

freeze-requirements:
	pip-compile --no-emit-index-url --upgrade --output-file requirements/requirements.txt requirements/requirements.in
	pip-compile --no-emit-index-url --upgrade --output-file requirements/requirements-dev.txt requirements/requirements-dev.in
