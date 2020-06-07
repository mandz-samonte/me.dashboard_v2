import React, { Component } from 'react';
import { Plus } from 'react-feather';

import Card from '../../components/Card';
import Button from '../../components/Button';

import Habit from './Habit';
import AddHabitModal from './AddHabitModal';

const SAMPLE_DATA = [
  {
    id: 1,
    title: 'Sample 1',
    days: [
      {
        id: 1,
        is_done: true,
        habit_id: 1
      },
      {
        id: 1,
        is_done: false,
        habit_id: 1
      }
    ]
  },
  {
    id: 2,
    title: 'Sample 2',
    days: [
      {
        id: 1,
        is_done: false,
        habit_id: 2
      }
    ]
  }
]

class HabitTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
  }

  render() {
    return (
      <Card.Card className="h-full shadow-md">
        <Card.Header>
          <Button
            className="p-2 ml-auto"
            circle
            onClick={() => this.setState({ isModalOpen: true })}
          >
            <Plus className="" />
          </Button>
        </Card.Header>

        <Card.Body>
          {
            SAMPLE_DATA.map(data => (
              <Habit
                key={data.id}
                days={data.days}
                title={data.title}
              />
            ))
          }
        </Card.Body>

        {this.state.isModalOpen && <AddHabitModal onClose={() => this.setState({ isModalOpen: false })} />}
      </Card.Card>
    )
  }
}

export default HabitTracker;
