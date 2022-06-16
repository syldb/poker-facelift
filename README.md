## Poker Facelift

A minimalistic tool for agile teams to estimate tickets.\
http://poker-facelift.herokuapp.com/


### Local setup

Prerequisites:
- Python 3.7+
- Makefile command line tool

Setup:
- Create a python virtualenv and activate it.
- Install dependencies with `make install-requirements`.
- Launch the local server with `make serve`.


### Launch tests

Python tests can be triggered with `make test`.\
Code linters can be triggered with `make lint`.


### Upgrade dependencies

The requirements are frozen for stability using pip-tools. To upgrade them run `make upgrade-requirements`.


### Deployment

The project is deployed with heroku. It is accessible at http://poker-facelift.herokuapp.com/


### Troubleshooting

You might want to run flask in production mode using `make serve-prod`.