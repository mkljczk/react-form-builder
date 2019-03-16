import React from 'react';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';
import { get, post } from '../components/requests';

export default class Demobar extends React.Component {
  constructor(props) {
    super(props);
    // console.log(`Demobar: `, props);
    this.state = {
      data: props.data,
      answers: props.answers,
      roPreviewVisible: props.roPreviewVisible,
    };
  }

  showRoPreview() {
    this.setState({
      roPreviewVisible: true,
    });
  }

  closePreview() {
    this.setState({
      roPreviewVisible: false,
    });
  }

  render() {
    const  { answers, data } = this.state;

    let roModalClass = 'modal ro-modal';
    if (this.state.roPreviewVisible) {
      roModalClass += ' show';
    }

    return (
      <div className="clearfix" style={{ margin: '10px', width: '70%' }}>
        <h4 className="pull-left">Preview</h4>
        <button className="btn btn-default pull-right" style={{ marginRight: '10px' }} onClick={this.showRoPreview.bind(this)}>Read Only Form</button>
        { this.state.roPreviewVisible &&
        <div className={roModalClass}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <ReactFormGenerator
                    download_path=""
                    back_action="/"
                    back_name="Back"
                    answer_data={answers}
                    action_name="Save"
                    form_action="/"
                    form_method="POST"
                    read_only={true}
                    variables={this.props.variables}
                    hide_actions={true} 
                    data={data} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Close</button>
              </div>
            </div>
          </div>
        </div> }
      </div>
    );
  }
}

function convert(arr) {
  const result = {};
  if (arr.forEach) {
    arr.forEach(x => {
      if (x.name.indexOf('tags_') > -1)
        result[x.name] = x.value.map(y => y.value);
      else
        result[x.name] = x.value;
    });
  }
  return result;
}

Demobar.getInitialProps = async function({ req }) {
  const hostUrl = `http://${req.headers.host}`;
  const url = hostUrl + '/api/formdata';
  const getUrl = hostUrl + '/api/form';

  const answers = await get(getUrl);
  const data = await get(url);
  return {
    data,
    answers: convert(answers),
    roPreviewVisible: true,
  }
}