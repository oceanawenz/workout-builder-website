import React, {Component} from 'react';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import '../Builder/Builder.css'
import List from '../List/List';
import axios from 'axios';




class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: [],
            // counter: 0,
            reps: 0,
            sets: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.updateExercise = this.updateExercise.bind(this);
        // this.increment = this.increment.bind(this);
        // this.decrecement = this.decrecement.bind(this);
        this.add = this.add.bind(this)
        this.addToReps = this.addToReps.bind(this)
        this.subtract = this.subtract.bind(this)
        this.subtractReps = this.subtractReps.bind(this)
    }


add() {
    this.setState({
        sets: this.state.sets + 1
    }) 
}

subtract() {
    if(this.state.sets === 0) {
        this.setState({
            sets: 0
        })
    } else {
        this.setState({
            sets: this.state.sets - 1
        })
    }
}

addToReps() {
    this.setState({
        reps: this.state.reps + 1
    }) 
}

subtractReps() {
    if(this.state.reps === 0) {
        this.setState({
            sets: 0
        })
    } else {
        this.setState({
            sets: this.state.reps - 1
        })
    }
}



// increment() {
//     this.setState({
//         counter: this.state.counter + 1
//     })
// }


// decrecement() {
//     if(this.state.reps > 0) {
//         this.setState(prevState => ({reps: prevState.reps - 1}))
//      }
// }

componentDidMount() {
    axios.get(`/api/exercises`).then(exercises => {
        this.setState({
            exercises: exercises.data
        })
    })
}

// updateExercise(id, sets, reps) {
//     axios.put(`/api/exercise/${id}`, {sets, reps}).then(exercise => {
//         this.setState({
//             exercises : exercise.data
//         }) 
//     }) 
// }

    render(){
        // const {sets, reps} = this.state;
        const mappedExercises = this.state.exercises.map(exercise => {
            console.log(exercise)
            return (
                <div key={exercise.exercise_id}>
                    <div>{exercise.exercise_name}</div>
                    <img src={`${exercise.image_url}`} alt=""/>
                    <div>{exercise.instructions}</div>
                    <div>
                        <h1>Sets {exercise.sets}</h1>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div>
                        <h1>Reps {exercise.reps}</h1>
                        <button>+</button>
                        <button>-</button>
                    </div>
   
                </div>
            )
        })
            return (
            <div className='excerciseContainer'>
            <h3>Exercises</h3>
                {mappedExercises}
                <button>Add to list</button>
                <div>
                <List/>
                </div>
            </div>
            
        )
    }

}




const mapStateToProps = (reduxState) => {
    return reduxState;
}

const mapDispatchToProps = {
    saveUser
}

const invokedConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default invokedConnect(Builder)





                    // {/* <div>
                    //     <button onClick={this.add}>+</button>
                    //     {/* <div>{exercise.sets}</div> */}
                    //     {/* <button>-</button> */}
                    // {/* </div>
                    // <div> */}
                    //     {/* <button>+</button> */}
                    //     {/* <div>{exercise.reps}</div> */}
                    //     {/* <button>-</button> */}
                    // {/* </div> */} 