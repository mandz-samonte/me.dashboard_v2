import React, { Component } from 'react';
import { Plus } from 'react-feather';
import { connect } from 'react-redux';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Tooltip from '../../components/Tooltip';
import Settings from '../../components/Settings';

import Habit from './Habit';
import AddHabitModal from './AddHabitModal';

import {
  getAllHabits,
  addHabit,
  deleteHabit,
} from '../../actions/HabitTrackerAction';

class HabitTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
  }

  componentWillMount() {
    this.props.getAllHabits();
  }

  render() {
    const { habits } = this.props;

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
            habits.map(data => (
              <Habit
                key={data.id}
                data={data}
                onDelete={this.props.deleteHabit}
              />
            ))
          }
        </Card.Body>

        {
          this.state.isModalOpen
          &&
          <AddHabitModal
            onClose={() => this.setState({ isModalOpen: false })}
            onAdd={this.props.addHabit}
          />
        }
      </Card.Card>
    )
  }
}

const mapStateToProps = (state) => ({
  habits: state.habits.habits,
})

export default connect(
  mapStateToProps,
  {
    getAllHabits,
    addHabit,
    deleteHabit
  }
)(HabitTracker);
