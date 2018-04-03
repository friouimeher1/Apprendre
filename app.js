import React, { Component } from 'react'
import { Paper } from 'react-md'
import CadreInfoProfile from 'components/cadre-profile/components/cadre-info-profile'
import Generic from './GenericStepper'
import 'components/cadre-profile/components/profile.scss'
import './timeLine.scss'
export default class CandidateName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      infoCandidate: {
        fullName: 'Muhamed Ahmed',
        position: 'Electrical Engineer',
        phoneHome: '(+968) 9703 264',
        city: 'Way 2312, Building One, Muscat, Oman',
        phoneMobile: '(+968) 9703 264',
        email: 'ahmed_al@company.com',
        id: '1234567',
        brithday: '10/10/1985',
        experiences: {
          experiences: []
        }
      }
    }
  }

  render () {
    const data = [
      {
        dataLabel: 'job invitation',
        dataDate: '12/12/2017',
        dataView: 'view invition letter',
        dataUser: 'user name',
        current: false
      },
      {
        dataLabel: 'shortlisted',
        dataDate: '12/12/2017',
        dataView: 'view invite to interveiw',
        dataUser: 'user name',
        current: false
      },
      {
        dataLabel: 'interviewed',
        dataDate: '12/12/2017',
        dataView: 'view evaluation form',
        dataUser: 'user name',
        current: false
      },
      {
        dataLabel: 'job offered',
        dataDate: '12/12/2017',
        dataView: 'view offer letter',
        dataUser: 'user name',
        current: true
      },
      {
        dataLabel: 'placement',
        dataDate: '12/12/2017',
        dataView: '',
        dataUser: '',
        current: false
      }
    ]
    const { infoCandidate } = this.state

    return (
      <div className="Profile">
        <CadreInfoProfile
          userProfile={infoCandidate}
          profileReFetch={() => []}
          profileReadOnlyMode={true}
        />
        <div className="ProfileSectionsBackground ProfileSectionsBackground__blanc">
          <Paper className="TimelineSection">
            <div className="TimelineSection__header">
              <h1>Hiring Timeline</h1>
            </div>
            <Generic data={data} />
          </Paper>
        </div>
      </div>
    )
  }
}
