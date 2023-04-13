import InvitationProtected from '../../../components/invitationProtected/invitationProtected'

const Invitation = ({params}) => {
  const {lastname, firstname} = params
  return (
    <div>
      <InvitationProtected firstname={firstname} lastname={lastname}/>
    </div>
  )
}
export default Invitation

