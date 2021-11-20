import React from 'react';
import { ALL, ACTIVE, DONE } from '../constant/todoType';


const withShowItem = Component => {
   return class HOCWithShowItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        visibleType: ALL,
      };
    }

    onShowAll = () => {
      this.setState({ visibleType: ALL });
    }
  
    onShowActive = () => {
      this.setState({ visibleType: ACTIVE });
    }
  
    onShowDone = () => {
      this.setState({ visibleType: DONE });
    }
  
    isShowItem = item => {
      const { visibleType } = this.state;
      switch (visibleType) {
        case ALL:
          return true;
        case DONE:
          return item.completed;
        case ACTIVE:
          return !item.completed;   
        default:
          return false;
      }
    }

    render() {
      return (
        <Component
          visibleType={this.state.visibleType}
          onShowAll={this.onShowAll}
          onShowActive={this.onShowActive}
          onShowDone={this.onShowDone}
          isShowItem={this.isShowItem}
          {...this.props}
        />
      );
    }
  }
}

export default withShowItem;