import React from 'react';
import JsonReader from '../../src/components/JsonReader';

export default {
    component: JsonReader,
    title: 'JsonReader'
};

export const Default = () => {
  const jsonObject = {
    id: '123456',
    stepNumber: 3,
    createdAt: new Date().toISOString(),
    status: 'running',
    nodeId: '',
    result: {
        'age': 30
    },
    engineId: '2f724166-1d0c-44b7-8dc4-b03bf4e54087',
    bag: {
        'name': {
            'first': 'John',
            'last': 'Doe'
        }
    },
  }

    return (
        <JsonReader 
            processObject={jsonObject} 
        />
    );
};