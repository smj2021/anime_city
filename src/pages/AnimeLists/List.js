// import { render } from '@testing-library/react';
// import React, { Component } from 'react';

// class List extends Component {
//     constructor() {
//         super();

//         this.state = {
//             lists: 0
//         }
//     }

//     createList = () => {
//         this.setState({ lists: this.state.lists + 1 });
//     }
//     deleteList = () => {
//         this.setState({ lists: this.state.lists - 1 })
//     }


//     render() {
//         return (
//             <div className="List">
//                 <Header
//                     increaseLists={this.createList}
//                     decreaseLists={this.deleteList}
//                 />
//                 <AnimeLists lists={this.state.lists}
//                 />
//             </div>
//         )
//     }
// }

// export default List;