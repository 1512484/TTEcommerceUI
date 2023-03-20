export default (store) => ({
  topMenuItems() {
    const { session } = store.state
    const topMenu = []

    if (!session.auto_workshop_id) {
      return topMenu
    }

    this.allow(topMenu, {
      withoutRestriction: 'access_diary',
      name: 'Diary',
      href: '/diary',
      icon: 'calendar-alt',
    })

    this.allow(topMenu, {
      name: 'Job Center',
      href: '/jobs',
      icon: 'tools',
    })

    this.allow(topMenu, {
      withoutRestriction: 'access_customers',
      name: 'Customers',
      href: '/customers',
      icon: 'address-card',
    })

    this.allow(topMenu, {
      only: ['admin', 'staff'],
      name: 'Invoices',

      href: '/invoices',
      icon: 'dollar-sign',
    })

    this.allow(topMenu, {
      withoutRestriction: 'access_inventory',
      name: 'Inventory',
      href: '/stocks',
      icon: 'toolbox',
    })

    this.allow(topMenu, {
      only: ['admin', 'staff'],
      withoutRestriction: 'access_service_schedules',
      name: 'Service Schedules',
      href: '/service-schedules/overdue-services',
      icon: 'calendar-check',
    })

    this.allow(topMenu, {
      only: ['admin', 'staff'],
      withoutRestriction: 'access_reports',
      name: 'Reports',
      href: '/reports/daily-income',
      icon: 'chart-line',
    })

    // this.allow(topMenu, {
    //   withoutRestriction: 'access_timesheet',
    //   name: 'Timesheets',
    //   href: '/timesheets',
    //   icon: 'clock',
    // })

    this.allow(topMenu, {
      only: ['admin', 'staff'],
      withoutRestriction: 'access_pos',
      name: 'POS',
      href: '/pos',
      icon: 'cash-register',
    })

    this.allow(topMenu, {
      name: 'Settings',
      href: '/personal',
      icon: 'cog',
    })

    return topMenu
  },
  topMenuNewLinks() {
    const { session } = store.state
    const { restrictions } = session

    const newLinks = [
      {
        name: 'New Booking',
        href: '/bookings/new',
        icon: 'calendar',
        divider: false,
      },
      {
        name: 'New Job',
        href: '/jobs/new',
        icon: 'wrench',
        divider: false,
      },
      {
        name: 'New Invoice',
        href: '/invoices/new',
        icon: 'dollar-sign',
        divider: false,
      },
      {
        name: 'New Quote/Estimate',
        href: '/quotes/new',
        icon: 'file',
        divider: false,
      },
      {
        href: '/first-divier',
        divider: true,
      },
      {
        name: 'New Customer',
        href: '/customers/new',
        icon: 'user',
      },
    ]

    if (!session.auto_workshop_id) {
      return newLinks
    }

    if (
      (session.is_admin || session.is_staff) &&
      !restrictions.includes('create_payments')
    ) {
      newLinks.push(
        {
          name: 'New Customer Payment',
          href: '/payments/new',
          icon: 'dollar-sign',
          divider: false,
        },
        {
          name: 'New Customer Credit Note',
          href: '/credit-notes/new',
          icon: 'dollar-sign',
          divider: false,
        }
      )
    }
    if (!restrictions.includes('access_inventory')) {
      newLinks.push(
        {
          href: '/second-divier',
          divider: true,
        },
        {
          name: 'New Stock',
          href: '/stocks/new',
          icon: 'file',
          divider: false,
        },
        {
          name: 'New Supplier',
          href: '/suppliers/new',
          icon: 'truck',
          divider: false,
        },
        {
          name: 'New Purchase Order',
          href: '/purchases/new',
          icon: 'tags',
          divider: false,
        }
      )
    }

    if (session.is_admin || session.is_staff) {
      newLinks.push(
        {
          name: 'New Bill',
          href: '/bills/new',
          icon: 'file',
          divider: false,
        },
        {
          name: 'New Bill Payment',
          href: '/bill_payments/new',
          icon: 'dollar-sign',
          divider: false,
        },
        {
          name: 'New Supplier Credit Note',
          href: '/supplier_credit_notes/new',
          icon: 'dollar-sign',
          divider: false,
        }
      )
    }

    return newLinks
  },

  allow(menu, options) {
    const { session, resources } = store.state
    if (!session || !session.employee_id) {
      return
    }

    const { restrictions } = session
    if (
      options.withoutRestriction &&
      restrictions.includes(options.withoutRestriction)
    ) {
      return
    }

    const { preferences } = resources
    if (
      options.withPreferences &&
      (!preferences[options.withPreferences] ||
        !preferences[options.withPreferences].value)
    ) {
      return
    }

    if (options.withoutMechanic)
      if (options.only && !options.only.includes(session.role)) {
        return
      }

    menu.push({
      name: options.name,
      href: options.href,
      icon: options.icon,
    })
  },
  customerMenuItems() {
    const customerMenu = []
    this.allow(customerMenu, {
      name: 'Customers',
      href: '/customers',
      icon: ['fas', 'address-card'],
    })

    this.allow(customerMenu, {
      name: '3rd Parties',
      href: '/insurers',
      icon: ['fas', 'address-card'],
    })

    this.allow(customerMenu, {
      name: 'Vehicles',
      href: '/vehicles',
      icon: ['fas', 'car'],
    })

    this.allow(customerMenu, {
      name: 'Emails & SMS',
      href: '/messages',
      icon: ['fas', 'envelope'],
    })

    this.allow(customerMenu, {
      only: ['admin'],
      name: 'Communication Campaigns',
      href: '/communication-campaigns',
      icon: ['fas', 'comments-alt'],
    })

    return customerMenu
  },
  settingMenuItems() {
    const settingsMenu = []

    this.allow(settingsMenu, {
      name: 'Personal Details',
      href: '/personal',
      icon: ['far', 'wrench'],
      active: true,
    })

    this.allow(settingsMenu, {
      name: 'Workshop Details',
      href: '/workshop-details',
      icon: ['far', 'wrench'],
      active: false,
      only: ['admin'],
    })

    this.allow(settingsMenu, {
      name: 'Employees',
      href: '/employees',
      icon: ['far', 'wrench'],
      active: false,
      only: ['admin'],
    })

    this.allow(settingsMenu, {
      name: 'Charts of Accounts',
      href: '/accounting-accounts',
      icon: ['far', 'file-alt'],
      active: false,
      only: ['admin'],
    })

    this.allow(settingsMenu, {
      name: 'Integrations',
      href: '/integrations/accounting',
      icon: ['far', 'list-ul'],
      active: false,
      only: ['admin'],
    })

    this.allow(settingsMenu, {
      name: 'Data Export/Import',
      href: '/data-export',
      icon: ['far', 'share'],
      active: false,
      only: ['admin'],
    })

    return settingsMenu
  },
  jobMenuItems() {
    const jobsMenu = []
    const { session } = store.state
    if (session.is_restricted_mechanic || session.is_mechanic) {
      this.allow(jobsMenu, {
        name: 'Current Jobs',
        href: '/jobs',
        icon: ['far', 'wrench'],
      })

      this.allow(jobsMenu, {
        name: 'All Jobs',
        href: '/all-jobs',
        icon: ['far', 'list-ul'],
        withoutRestriction: 'access_all_jobs',
      })
    } else {
      this.allow(jobsMenu, {
        name: 'Current Jobs',
        href: '/jobs',
        icon: ['far', 'wrench'],
      })

      this.allow(jobsMenu, {
        name: 'Quotes',
        href: '/quotes',
        icon: ['far', 'file-alt'],
      })

      this.allow(jobsMenu, {
        name: 'All Jobs',
        href: '/all-jobs',
        icon: ['far', 'list-ul'],
        withoutRestriction: 'access_all_jobs',
      })

      this.allow(jobsMenu, {
        name: 'Follow Ups',
        href: '/follow-ups',
        icon: ['far', 'share'],
      })

      this.allow(jobsMenu, {
        name: 'Job Types',
        href: '/job-types',
        icon: ['far', 'file'],
        withoutRestriction: 'access_job_types',
        only: ['admin', 'staff'],
      })

      this.allow(jobsMenu, {
        name: 'Automations',
        href: '/automations',
        icon: ['far', 'retweet'],
        only: ['admin'],
      })

      this.allow(jobsMenu, {
        withoutRestriction: 'access_timesheet',
        name: 'Timesheets',
        href: '/timesheets',
        icon: ['far', 'clock'],
      })
    }

    return jobsMenu
  },
  diaryMenuItems() {
    const menuItems = []
    const { session } = store.state
    if (session.is_restricted_mechanic || session.is_mechanic) {
      return menuItems
    }

    this.allow(menuItems, {
      name: 'Diary',
      href: '/diary',
      icon: ['far', 'clipboard-check'],
    })

    this.allow(menuItems, {
      name: 'All Bookings',
      href: '/bookings',
      icon: ['far', 'list-ul'],
    })

    this.allow(menuItems, {
      name: 'Online Booking Requests',
      href: '/booking-requests',
      icon: ['far', 'envelope'],
    })

    this.allow(menuItems, {
      name: 'Courtesy Vehicle Bookings',
      href: '/courtesy-vehicle-bookings',
      icon: ['far', 'calendar-alt'],
    })

    return menuItems
  },
  accountingMenuItems() {
    const accountingMenu = []

    this.allow(accountingMenu, {
      name: 'Invoices',
      href: '/invoices',
      icon: ['far', 'dollar-sign'],
      only: ['admin', 'staff'],
    })

    this.allow(accountingMenu, {
      name: 'Customer Payments',
      href: '/payments',
      icon: ['far', 'receipt'],
      only: ['admin', 'staff'],
    })

    this.allow(accountingMenu, {
      name: 'Customer Credit Notes',
      href: '/credit-notes',
      icon: ['far', 'file-plus'],
      only: ['admin', 'staff'],
    })

    this.allow(accountingMenu, {
      name: 'Refunds',
      href: '/refunds',
      icon: ['far', 'exchange'],
      only: ['admin', 'staff'],
    })

    this.allow(accountingMenu, {
      name: 'Bills',
      href: '/bills',
      icon: ['far', 'dollar-sign'],
      only: ['admin', 'staff'],
    })

    this.allow(accountingMenu, {
      name: 'Bill Payments',
      href: '/bill-payments',
      icon: ['far', 'receipt'],
      only: ['admin', 'staff'],
    })

    this.allow(accountingMenu, {
      name: 'Supplier Credit Notes',
      href: '/supplier-credit-notes',
      icon: ['far', 'file-plus'],
      only: ['admin', 'staff'],
    })

    this.allow(accountingMenu, {
      name: 'Supplier Refunds',
      href: '/supplier-refunds',
      icon: ['far', 'exchange'],
      only: ['admin', 'staff'],
    })

    // this.allow(accountingMenu, {
    //   name: 'Invoice Items',
    //   href: '/costs',
    //   icon: ['far', 'tags'],
    //   only: ['admin', 'staff'],
    //   withPreferences: 'show_invoice_item_list',
    // })

    return accountingMenu
  },
  stockMenuItems() {
    const { session } = store.state
    const stockMenu = []
    this.allow(stockMenu, {
      name: 'Stocks',
      href: '/stocks',
      icon: ['fas', 'box'],
    })

    this.allow(stockMenu, {
      name: 'Kits',
      href: '/kits',
      icon: ['fas', 'box'],
    })

    this.allow(stockMenu, {
      name: 'Suppliers',
      href: '/suppliers',
      icon: ['fas', 'truck'],
    })

    this.allow(stockMenu, {
      name: 'Stock Categories',
      href: '/stock-categories',
      icon: ['fas', 'boxes'],
    })

    this.allow(stockMenu, {
      name: 'Purchase Orders',
      href: '/purchases',
      icon: ['fas', 'clipboard-check'],
    })

    this.allow(stockMenu, {
      name: 'Stock-takes',
      href: '/stocktakes',
      icon: ['fas', 'hand-holding'],
      withoutRestriction: 'access_stocktake',
    })

    this.allow(stockMenu, {
      name: 'Price Groups',
      href: '/price-groups',
      icon: ['fas', 'clipboard-list'],
      only: ['admin'],
    })

    if (
      session.related_auto_workshops &&
      session.related_auto_workshops.length > 0
    ) {
      this.allow(stockMenu, {
        name: 'Stock Transfers',
        href: '/stock-transfers',
        icon: ['fas', 'dolly-flatbed'],
      })
    }

    return stockMenu
  },
  serviceScheduleMenuItems() {
    const { resources } = store.state
    const configurations = resources.configurations
    const assetPropertySet = configurations.asset_property_set

    const menuItems = [
      {
        name: 'Overdue Services',
        href: '/service-schedules/overdue-services',
        icon: ['fas', 'exclamation-triangle'],
      },
      {
        name: 'Upcoming Services',
        href: '/service-schedules/upcoming-services',
        icon: ['fas', 'calendar-alt'],
      },
    ]

    if (assetPropertySet && assetPropertySet.registration_due_date) {
      menuItems.push(
        ...[
          {
            name: 'Registration Overdues',
            href: '/service-schedules/overdue-registrations',
            icon: ['fas', 'exclamation-triangle'],
          },
          {
            name: 'Registration Upcomings',
            href: '/service-schedules/upcoming-registrations',
            icon: ['fas', 'calendar-alt'],
          },
        ]
      )
    }

    if (configurations && !configurations.no_wof) {
      menuItems.push(
        ...[
          {
            name: `${configurations.wof_name || 'WOF'} Overdues`,
            href: '/service-schedules/wof-overdue-services',
            icon: ['fas', 'exclamation-triangle'],
          },
          {
            name: `${configurations.wof_name || 'WOF'} Upcomings`,
            href: '/service-schedules/wof-upcoming-services',
            icon: ['fas', 'calendar-alt'],
          },
        ]
      )
    }
    return menuItems
  },
})
