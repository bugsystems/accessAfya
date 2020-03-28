import React, { Component } from 'react';
import user from '../images/user.jpg';
import Chart from './charts/Chart';

import { Container, Row } from 'react-bootstrap-grid-component';

class Metrics extends Component {
  render() {
    // Styles

    const staffName = {
      color: 'purple',
      padding: '2px'
    };
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2 mt-1 sidebar-menu'>
            <p>Side Menu</p>
          </div>
          <div className='col-md-10'>
            <div className='row  notification-bar'>
              <div className='col-md-7'>
                <button className='btn btn-light'>Add Assignment +</button>
              </div>
              <div className='col-md-2' style={{ display: 'table-cell' }}>
                <div className='progress'>
                  <div
                    className='efficiency-bar'
                    role='progressbar'
                    aria-valuenow='58'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '55%' }}
                  ></div>
                </div>
                <div>
                  <p className='text-muted'>24k/24k patients seen</p>
                </div>
              </div>
              <div className='col-md-3 pull-right'>
                <div>
                  Kepha Marasi <br />{' '}
                  <img src={user} className='img-user img-circle'></img>
                  <p className='text-muted'>kephamarasi@gmail.com </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12' style={{ backgroundColor: '#f4f6f7' }}>
                <div className='wrapper'>
                  <Container>
                    <h2>Analytics</h2>
                    <Row>
                      <div className='col-md-3'>
                        <div className='row'>
                          <div className='card col-md-11 mt-3'>
                            <div className='card-body'>
                              <p className='text-muted'>VISITS</p>
                              <button
                                className='btn mt-1'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  7
                                </span>
                                Kiambu
                              </button>
                              <button
                                className='btn mt-1'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  12
                                </span>
                                Mukuru Kwa Reuben
                              </button>
                              <button
                                className='btn mt-1'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  26
                                </span>
                                Mukuru Kwa Njenga
                              </button>
                              <button
                                className='btn mt-1'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  38
                                </span>
                                Baba Dogo
                              </button>
                              <button
                                className='btn mt-1'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  41
                                </span>
                                Kosovo
                              </button>
                              <button
                                className='btn mt-1'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  24
                                </span>
                                Mukuru Kayaba
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-9'>
                        <div className='row'>
                          <div className='card col-md-12 mt-3'>
                            <div className='card-body'>
                              <p className='text-muted'>KEY ISSUES</p>
                              <div className='row'>
                                <div className='col-lg-3 col-sm-6'>
                                  <div
                                    className='card mt-3'
                                    style={{ padding: '5px' }}
                                  >
                                    <div>Wrong Prescription</div>
                                    <p className='text-muted'>Kosovo</p>
                                  </div>
                                </div>
                                {/* another */}
                                <div className='col-lg-3 col-sm-6'>
                                  <div
                                    className='card mt-3'
                                    style={{ padding: '5px' }}
                                  >
                                    <div>Opened Late</div>
                                    <p className='text-muted'>Kiambu</p>
                                  </div>
                                </div>
                                {/* Another */}
                                <div className='col-lg-3 col-sm-6'>
                                  <div
                                    className='card mt-3'
                                    style={{ padding: '5px' }}
                                  >
                                    <div>Bad Receipts</div>
                                    <p className='text-muted'>New York</p>
                                  </div>
                                </div>
                                {/* another */}
                                <div className='col-lg-3 col-sm-6'>
                                  <div
                                    className='card mt-3'
                                    style={{ padding: '5px' }}
                                  >
                                    <div>Late Check in</div>
                                    <p className='text-muted'>Mathare</p>
                                  </div>
                                </div>
                                {/* another */}
                                <div className='col-lg-3 col-sm-6'>
                                  <div
                                    className='card mt-3'
                                    style={{ padding: '5px' }}
                                  >
                                    <div>Delay in Lab</div>
                                    <p className='text-muted'>Kiambu</p>
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
                              <p className='text-muted'>MONITORING PERIOD</p>
                              <div className='row'>
                                <button className='btn btn-light'>Day</button>
                                <button className='btn btn-light'>Week</button>
                                <button className='btn btn-light'>Month</button>
                                <button className='btn btn-light'>Year</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Row 3 for charts */}
                        <div className='row'>
                          <div className=' col-md-12 mt-3'>
                            <div className='card col-md-4'>
                              <Chart />
                            </div>
                            <div className='card col-md-4'>
                              <Chart />
                            </div>
                          </div>
                        </div>
                        {/* Row 4 - staff */}
                        <div className='row'>
                          <div className='card col-md-12 mt-3'>
                            <div className='card-body'>
                              <p>Staff Performance</p>
                              <table class='table'>
                                <thead>
                                  <tr>
                                    <th scope='col'>
                                      N<sup>O</sup>
                                    </th>
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
                                    <td style={{ color: '#723DBE' }}>
                                      Mercy Mukoya
                                    </td>
                                    <td>1.3 &nbsp; +0.2</td>
                                    <td>1.2 &nbsp; +0.3</td>
                                    <td>
                                      96%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='96'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{
                                            width: '96%'
                                          }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      3
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='3'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '3%' }}
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope='row'>2</th>
                                    <td style={{ color: '#723DBE' }}>
                                      Kennedy Ayako
                                    </td>
                                    <td>1.3 &nbsp; +0.2</td>
                                    <td>1.2 &nbsp; +0.3</td>
                                    <td>
                                      92%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='92'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '92%' }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      6
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='6'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '6%' }}
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope='row'>3</th>
                                    <td style={{ color: '#723DBE' }}>
                                      Stephanie Tomsett
                                    </td>
                                    <td>1.3 &nbsp; +0.2</td>
                                    <td>1.2 &nbsp; +0.3</td>
                                    <td>
                                      58%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='58'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '58%' }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      1
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='1'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '1%' }}
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope='row'>3</th>
                                    <td style={{ color: '#723DBE' }}>
                                      Faith Kityo
                                    </td>
                                    <td>1.3 &nbsp; +0.2</td>
                                    <td>1.2 &nbsp; +0.3</td>
                                    <td>
                                      74%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='74'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '74%' }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      8
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='8'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '8%' }}
                                        ></div>
                                      </div>
                                    </td>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Metrics;
