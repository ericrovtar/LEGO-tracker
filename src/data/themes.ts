import { Theme } from '../app/theme/theme';

export const Subthemes = [
    {
        id: 2,
        name: 'Microfighters',
        startDate: new Date(2013, 1, 1),
        endDate: null,
        subthemes: null,
        logoUrl: ''
    },
    { 
        id: 3,
        name: 'Ultimate Collectors Series',
        startDate: new Date(1999, 1, 1),
        endDate: null,
        subthemes: null,
        logoUrl: ''
    },
    { 
        id: 4,
        name: 'The Force Awakens',
        startDate: new Date(2015, 9, 1),
        endDate: null,
        subthemes: null,
        logoUrl: ''
    },
    { 
        id: 5,
        name: 'Rogue One',
        startDate: new Date(2016, 9, 1),
        endDate: null,
        subthemes: null,
        logoUrl: ''
    },
    { 
        id: 6,
        name: 'The Last Jedi',
        startDate: new Date(2017, 9, 1),
        endDate: null,
        subthemes: null,
        logoUrl: ''
    },
]

class ThemeData {
    public static deserializeSubthemes(): Array<Theme> {
        const subthemes: Array<Theme> = [];

        Subthemes.forEach((item, index) => {
            subthemes.push(new Theme().deserialize(item));
        });

        return subthemes;
    }
}

export const Themes = [
    {
        id: 1,
        name: 'Star Wars',
        startDate: new Date(1995, 1, 1),
        endDate: null,
        subthemes: ThemeData.deserializeSubthemes(),
        logoUrl: ''
    }
]
