import React, { Component } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Container } from "semantic-ui-react"
import { DialoguesStyle } from "../../styled/Dialogues"
import { dialogueIcon } from "../../utils/Icon"
import { productDetails } from '../../../state'
import { connect } from 'react-redux'
import { Table, Icon } from 'semantic-ui-react'
import ReactPaginate from 'react-paginate';
class Dialogue extends Component {
    constructor(props) {
        super()
        this.state = {
            offSet: 0,
            perPage: 10,
            currentPage: 0,
            data: []
        }
        this.handlePageClick = this.handlePageClick.bind(this);

        // console.log('this.props',props.companyName)
    }
    receivedData() {
        // console.log('the recieved data ',this.props.companyName)

        const data = this.props.companyName
        console.log('this.state.offset', this.state)
        if (this.state.currentPage !== 0) {
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            console.log('what is the data here ', slice)

            const postData = slice.map(pd => {
                console.log('checkingmap data', pd)
                return pd

            })

            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                data: [...postData]
            })

        }
        else{
            const SliceForFirstPage = data.slice(0,10)
            console.log('first page',SliceForFirstPage)
            this.setState({
                data:SliceForFirstPage
            })
        }


    }
    handlePageClick(e) {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        // console.log('the page changes ', selectedPage, offset)

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    }
    componentDidMount() {
        // console.log('the component did mount changes ')

        this.receivedData()
    }

    render() {
        const companyName = this.state.data
        console.log('what is state valuees here', this.state.data)


        return (
            <div>
                <DialoguesStyle>
                    <NavBar pageType="settings > dialogues" />
                    <SideBar />
                    <Container className="background-product">
                        <Container className="product">
                            <div className="header-bar">
                                <div className="add-dialogue">
                                    <i className={`${dialogueIcon} dialogue-icon`}></i>
                                    <h1>Add Dialogues</h1>
                                </div>
                            </div>
                            <div className="product-details">

                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className="center aligned">NAME</Table.HeaderCell>
                                            <Table.HeaderCell className="center aligned">KIND</Table.HeaderCell>
                                            <Table.HeaderCell className="center aligned">BRAND</Table.HeaderCell>
                                            <Table.HeaderCell className="center aligned">EXPORT/IMPORT</Table.HeaderCell>
                                            <Table.HeaderCell className="center aligned">ACTIONS</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {
                                            // console.log('this.company',companyName)

                                        }
                                        {
                                            companyName.map((item, index) => {
                                                //    console.log('item',item,'index',index)
                                                return (<Table.Row key={index}>
                                                    <Table.Cell className="center aligned">{item.company}</Table.Cell>
                                                    <Table.Cell className="center aligned">{item.kind}</Table.Cell>
                                                    <Table.Cell className="center aligned">{item.brand}</Table.Cell>
                                                    <Table.Cell className="center aligned">
                                                        <Icon name='small upload'></Icon>
                                                        <Icon name='small download'></Icon>
                                                    </Table.Cell>
                                                    <Table.Cell className="center aligned">
                                                        <Icon name='small pencil square o'></Icon>
                                                        <Icon name='small get pocket'></Icon>
                                                        <Icon name='small plus'></Icon>
                                                        <Icon name='small database'></Icon>
                                                        <Icon name='small check circle'></Icon>
                                                    </Table.Cell>

                                                </Table.Row>)

                                            })


                                        }
                                    </Table.Body>
                                </Table>
                            </div>
                            <ReactPaginate
                                previousLabel={<Icon name="arrow left"></Icon>}
                                nextLabel={<Icon name="arrow right"></Icon>}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={1}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </Container>
                    </Container>

                </DialoguesStyle>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('what is the state value here', state)
    return {
        companyName: state
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        productDetails: () => { dispatch(productDetails()) }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogue)