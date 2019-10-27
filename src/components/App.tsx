import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchToDos, deleteToDo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  toDos: ToDo[];
  fetchToDos: Function;
  deleteToDo: typeof deleteToDo;
}

interface AppState {
  fetchingToDos: boolean;
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetchingToDos: false };
  }

  onFetchButtonClick = (): void => {
    this.props.fetchToDos();
    this.setState({ fetchingToDos: true });
  };

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.toDos.length && this.props.toDos.length)
      this.setState({ fetchingToDos: false });
  }

  onToDoClick = (id: number): void => {
    this.props.deleteToDo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.toDos.map((toDo: ToDo) => {
      return (
        <div
          key={toDo.id}
          onClick={() => {
            this.onToDoClick(toDo.id);
          }}
        >
          {toDo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onFetchButtonClick}>Fetch</button>
        {this.state.fetchingToDos ? <h1>Loading</h1> : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ toDos }: StoreState): { toDos: ToDo[] } => {
  return { toDos };
};

export const App = connect(
  mapStateToProps,
  { fetchToDos, deleteToDo }
)(_App);
