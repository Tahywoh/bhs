export default {
  header: 'Patient Dashboard',
  default: 'interface',
  links: {
    interface: {
      url: '/Patient-interface', text: 'Patient Interface'
    },
    appointment: {
      url: '/Patient-interface/appointment', text: 'Patient-Appointment', icon: 'icon ion-android-contacts'
    },
    bookAppointment: {icon: 'icon ion-ios-plus'},
    medicalRecord: {
      url: '/Patient-interface/medical-record', text: 'User Medical Record', icon: 'icon ion-ios-paper'
    },
    messages: {
      url: '/Patient-interface/:id', text: 'Message', icon: 'icon ion-chatbox-working'
    },
    cart: {
      url: '/Patient-interface/cart', text: 'Cart', icon: 'icon ion-ios-cart'
    },
    updateProfile: {
      url: `/Patient-interface/${encodeURI('update profile')}`, text: 'Update Patient Profile', icon: 'icon ion-edit'
    },
    profile: {
      url: '/Patient-interface/profile', text: 'Patient Profile'
    }
  }
}
