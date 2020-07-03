import React from 'react';
import ResultSet from '../../molecules/ResultSet';
import { connect } from 'react-redux';
// import './Grid.css';
// import './Game.module.scss'
import Heading from '../../molecules/Heading';
import FilterBox from '../../molecules/FilterBox';
import SelectedFilter from '../../molecules/SelectedFilter';
import SearchBox from '../../molecules/SearchBox';
import SortBox from '../../molecules/SortBox';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSort = this.handleSort.bind(this);
        const filterobj = [
            {
                heading: "Species",
                filterobj: [{
                    label: "Human",
                    id: "human",
                    grpclass: "species",
                }, {
                    label: "Mytholog",
                    id: "mytholog",
                    grpclass: "species",
                }, {
                    label: "Humanoid",
                    id: "humanoid",
                    grpclass: "species",
                }]
            },
            {
                heading: "Gender",
                filterobj: [{
                    label: "Male",
                    id: "male",
                    grpclass: "gender",
                }, {
                    label: "Female",
                    id: "female",
                    grpclass: "gender",
                }]
            },
            {
                heading: "Status",
                filterobj: [{
                    label: "Alive",
                    id: "alive",
                    grpclass: "status",
                }, {
                    label: "Dead",
                    id: "dead",
                    grpclass: "status",
                }, {
                    label: "Unknown",
                    id: "unknown",
                    grpclass: "status",
                }
                ]
            }
        ];

        // Don't call this.setState() here!
        this.state = {
            filterobj: filterobj,
            filters: {
                gender: "",
                status: "",
                species: ""
            },
            sortValue: "Ascending"
        };
    }

    componentWillMount() {
        const { getList } = this.props;
        getList();
    }

    handleFilterClick(event, id, filterHeading, grpclass) {
        const isChecked = event ? event.target.checked : false;
        const { getList } = this.props;
        const { filters } = this.state;
        const category = filterHeading.toLowerCase();
        let newValue = "";
        if (isChecked) {
            newValue = !!filters[category] ? filters[category] + '|' + id : id;
        } else {
            let arr = filters[category].split("|");
            arr = arr.filter(item => item !== id)
            newValue = arr.join("|");
        }

        this.setState({
            filters: {
                ...filters,
                [category]: newValue
            }
        }, () => {
            getList(this.state.filters);
        });
    }
    handleSort(event) {
        const sortValue = event.target.value;
        this.setState({
            sortValue: sortValue
        })
    }
    removeFilter(id, category) {
        this.handleFilterClick(false, id, category)

    }
    handleSearchSubmit(inputValue) {
        const { getList } = this.props;
        getList({ name: inputValue });
    }

    render() {
        const { list, getList } = this.props;
        const { filterobj, filters, sortValue } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12-sm left-col">
                        <Heading name="Filters" />
                        {filterobj.map(({ heading, filterobj }) => (
                            <FilterBox filterHeading={heading} filterobj={filterobj} handleFilterClick={this.handleFilterClick} filters={filters} />
                        ))}
                    </div>
                    <div className="col-md-9 col-12-sm right-col">
                        <Heading name="Selected Filters" />
                        <SelectedFilter filters={filters} removeFilter={this.removeFilter} />

                        <div className="row middle-row">
                            <SearchBox handleSearchSubmit={this.handleSearchSubmit} />
                            <SortBox handleSort={this.handleSort} />
                        </div>
                        <div className="row box-container">
                            <ResultSet list={list} sortValue={sortValue} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listingData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: (payload) => dispatch({ type: "GET_LIST", payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
