import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchClients } from '../actions/index';

/**
 *
 */
class SearchBar extends Component {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     *
     * @param e
     */
    handleChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    /**
     *
     * @param string
     * @returns {boolean}
     */
    validateEmail = (string) => {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(string);
    };

    /**
     *
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();
        if (this.validateEmail(this.state.searchTerm)) {
            this.props.fetchClients(this.state.searchTerm);
            this.setState({
                searchTerm: '',
                error: false
            });
        } else {
            this.setState({
                error: true
            });
        }
    }

    /**
     *
     * @returns {XML}
     */
    renderError = () => {
        return (
            <div
                className="alert alert-danger"
                role="alert" >
                A valid email is required.
            </div>
        );
    };

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div>
                { this.state.error ? this.renderError() : false }
                <form
                    className="input-group"
                    onSubmit={ this.handleSubmit } >
                    <input
                        placeholder="Client info: by email"
                        className="form-control"
                        onChange={ this.handleChange }
                        value={ this.state.searchTerm } />
                    <span className="input-group-btn">
                        <button
                            type="submit"
                            className="btn btn-secondary">
                            Submit
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}

/**
 *
 * @param dispatch
 * @returns {{fetchClients: fetchClients}|B|N}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchClients }, dispatch);
}

/**
 *
 */
export default connect(null, mapDispatchToProps)(SearchBar);