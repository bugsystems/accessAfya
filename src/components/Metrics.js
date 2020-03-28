import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap-grid-component';
import style from './styles.css';

class Metrics extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className={style.wrapper}>
          <Container bg-color='#F8F9FA'>
            <h5>Analytics</h5>
            <Row>
              <div className='col-md-3'>
                <div className='row'>
                  <div className='card col-md-11'>
                    <div className='card-body'>
                      <p>Visits</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-9'>
                <div className='row'>
                  <div className='card col-md-12 mt-3'>
                    <div className='card-body'>
                      <p>Metrics</p>
                      <div className='row'>
                        <div className='col-lg-3 col-sm-6'>
                          <div className='card mt-3'>
                            <div className='card-heading'>
                              <div>Revenue from Amazon</div>
                            </div>
                            <div className='card-value'>
                              <span>$50k</span>
                            </div>
                          </div>
                        </div>
                        {/* another */}
                        <div className='col-lg-3 col-sm-6'>
                          <div className='card mt-3'>
                            <div className='card-heading'>
                              <div>Revenue from Amazon</div>
                            </div>
                            <div className='card-value'>
                              <span>$50k</span>
                            </div>
                          </div>
                        </div>
                        {/* Another */}
                        <div className='col-lg-3 col-sm-6'>
                          <div className='card mt-3'>
                            <div className='card-heading'>
                              <div>Revenue from Amazon</div>
                            </div>
                            <div className='card-value'>
                              <span>$50k</span>
                            </div>
                          </div>
                        </div>
                        {/* another */}
                        <div className='col-lg-3 col-sm-6'>
                          <div className='card mt-3'>
                            <div className='card-heading'>
                              <div>Revenue from Amazon</div>
                            </div>
                            <div className='card-value'>
                              <span>$50k</span>
                            </div>
                          </div>
                        </div>
                        {/* another */}
                        <div className='col-lg-3 col-sm-6'>
                          <div className='card mt-3'>
                            <div className='card-heading'>
                              <div>Revenue from Amazon</div>
                            </div>
                            <div className='card-value'>
                              <span>$50k</span>
                            </div>
                          </div>
                        </div>
                        {/* another */}
                        <div className='col-lg-3 col-sm-6'>
                          <div className='card mt-3'>
                            <div className='card-heading'>
                              <div>Revenue from Amazon</div>
                            </div>
                            <div className='card-value'>
                              <span>$50k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Row 2 */}
                <div className='row'>
                  <div className='card col-md-12 mt-3'>
                    <div className='card-body'>
                      <p>Monitoring period</p>
                      <div className='row'>
                        <div className='col-lg-3 col-sm-6'>
                          <div className='card'>
                            <div className='card-heading'>
                              <div>Revenue from Amazon</div>
                            </div>
                            <div className='card-value'>
                              <span>$50k</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Row 3 - staff */}
                <div className='row'>
                  <div className='card col-md-12 mt-3'>
                    <div className='card-body'>
                      <p>Staff Performance</p>
                      <table class='table'>
                        <thead>
                          <tr>
                            <th scope='col'>No</th>
                            <th scope='col'>Staff Name</th>
                            <th scope='col'>Efficiency Delta</th>
                            <th scope='col'>NPS Delta</th>
                            <th scope='col'>Efficiency</th>
                            <th scope='col'>Reported Issues</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope='row'>1</th>
                            <td>Mercy Mukoya</td>
                            <td>1.3 &nbsp; +0.2</td>
                            <td>1.2 &nbsp; +0.3</td>
                            <td>
                              96% &nbsp;{' '}
                              <div class='progress'>
                                <div
                                  class='progress-bar bg-success'
                                  role='progressbar'
                                  style='width: 45%'
                                  aria-valuenow='25'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                ></div>
                              </div>
                            </td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <th scope='row'>2</th>
                            <td>Kennedy Ayako</td>
                            <td>1.3 &nbsp; +0.2</td>
                            <td>1.2 &nbsp; +0.3</td>
                            <td>96%</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <th scope='row'>3</th>
                            <td>Stephanie Tomsett</td>
                            <td>1.3 &nbsp; +0.2</td>
                            <td>1.2 &nbsp; +0.3</td>
                            <td>96%</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <th scope='row'>3</th>
                            <td>Faith Kityo</td>
                            <td>1.3 &nbsp; +0.2</td>
                            <td>1.2 &nbsp; +0.3</td>
                            <td>96%</td>
                            <td>3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Metrics;
