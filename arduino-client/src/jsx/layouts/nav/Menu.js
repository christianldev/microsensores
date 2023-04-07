export const MenuList = [
    //Dashboard
    {
        title: 'Reportes',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-layout" />,
        content: [

            {
                title: 'Temperatura',
                to: 'event',
            },

            {
                title: 'Humedad',
                to: 'analytics',

            },
            {
                title: 'Gas',
                to: 'analytics',

            },

        ],
    },


    //Charts
    {
        title: 'Charts',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-bar-chart-1" />,
        content: [

            {
                title: 'RechartJs',
                to: 'chart-rechart',
            },
            {
                title: 'Chartjs',
                to: 'chart-chartjs',
            },
            {
                title: 'Sparkline',
                to: 'chart-sparkline',
            },
            {
                title: 'Apexchart',
                to: 'chart-apexchart',
            },
        ]
    },
    {
        title: 'Report',
        to: 'reports',

        iconStyle: <i className="flaticon-381-list" />,

    },


]