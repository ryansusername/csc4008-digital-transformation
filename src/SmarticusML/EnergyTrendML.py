import pandas as pd

from sklearn.naive_bayes import GaussianNB

nb_energy = GaussianNB()

weekly_energy = pd.read_csv('weekly_energy.csv')
weekly_energy_target = pd.read_csv('weekly_energy_target.csv')

def predict_energy(self):
    nb_energy.fit(weekly_energy, weekly_energy_target)
    live_energy = pd.read_csv('live_energy.csv')
    pred = nb_energy.predict_proba(live_energy)

    print(pred)
