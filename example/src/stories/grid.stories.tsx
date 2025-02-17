import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiGrid } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Grid',
  component: PiGrid,
  argTypes: {
    mode: {
      description:
        'In Static Mode, rowData should be given as input to display data in the table'
    },
    onGridReady: {
      description: 'Event to capture onGridReady event of ag-grid'
    }
  }
} as ComponentMeta<typeof PiGrid>

const Template: ComponentStory<typeof PiGrid> = (args) => <PiGrid {...args} />

const columns: any = [
  {
    field: 'athlete',
    editable: true
    // valueSetter:(p:any) =>{
    //   console.log(p);
    //   return true;
    // }
  },
  {
    field: 'country'
  },
  {
    field: 'age'
  },
  {
    field: 'sport'
  }
]

const data = [
  {
    athlete: 'Michael Phelps',
    age: 23,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 8,
    silver: 0,
    bronze: 0,
    total: 8
  },
  {
    athlete: 'Michael Phelps',
    age: 19,
    country: 'United States',
    year: 2004,
    date: '29/08/2004',
    sport: 'Swimming',
    gold: 6,
    silver: 0,
    bronze: 2,
    total: 8
  },
  {
    athlete: 'Michael Phelps',
    age: 27,
    country: 'United States',
    year: 2012,
    date: '12/08/2012',
    sport: 'Swimming',
    gold: 4,
    silver: 2,
    bronze: 0,
    total: 6
  },
  {
    athlete: 'Jess Schipper',
    age: 21,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 1,
    silver: 0,
    bronze: 2,
    total: 3
  },
  {
    athlete: 'Rebecca Soni',
    age: 21,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 1,
    silver: 2,
    bronze: 0,
    total: 3
  },
  {
    athlete: 'Eamon Sullivan',
    age: 22,
    country: 'Australia',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 2,
    bronze: 1,
    total: 3
  },
  {
    athlete: 'Dara Torres',
    age: 41,
    country: 'United States',
    year: 2008,
    date: '24/08/2008',
    sport: 'Swimming',
    gold: 0,
    silver: 3,
    bronze: 0,
    total: 3
  }
]

const requestInfo = {
  url: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
  method: 'POST',
  body: {}
}

export const Static = Template.bind({})
Static.args = {
  mode: 'static',
  columns: columns,
  rowData: data
}

export const Paginate = Template.bind({})
Paginate.args = {
  mode: 'paginate',
  columns: columns,
  requestInfo:requestInfo
}


export const Infinite = Template.bind({})
Infinite.args = {
  mode: 'infinite',
  columns: columns,
  requestInfo:requestInfo
}