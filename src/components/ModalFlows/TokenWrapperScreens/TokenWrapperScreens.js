// import React, { useMemo, useState, useCallback } from 'react'
// import ModalFlowBase from '../ModalFlowBase'
// import ChangeSupport from './ChangeSupport'
// import SupportProposal from './SupportProposal'

// import useActions from '../../../hooks/useActions'

// function TokenWrapperScreens({ mode }) {
//   const [transactions, setTransaction] = useState([])
//   const { tokenManagerActions } = useActions()

//   const getTransactions = useCallback(
//     async (onComplete, amount) => {
//       await tokenManagerActions[`${mode}`](amount, tx => {
//         setTransaction(tx)
//         onComplete()
//       })
//     },
//     [mode, tokenManagerActions]
//   )

//   const screens = useMemo(() => {
//     if (mode === 'support') {
//       return [
//         {
//           title: 'Support this proposal',
//           graphicHeader: false,
//           content: <SupportProposal getTransactions={getTransactions} />,
//         },
//       ]
//     }
//     if (mode === 'update') {
//       return [
//         {
//           title: 'Change support',
//           graphicHeader: false,
//           content: (
//             <ChangeSupport
//               getTransactions={getChangeSupportTransactions}
//               proposal={proposal}
//             />
//           ),
//         },
//       ]
//     }
//   }, [getTransactions, getChangeSupportTransactions, mode, proposal])

//   return (
//     <ModalFlowBase
//       frontLoad={false}
//       transactions={transactions}
//       transactionTitle={mode === 'wrapp' ? 'Wrapp token' : 'Unwrap token'}
//       screens={screens}
//     />
//   )
// }

// export default TokenWrapperScreens
