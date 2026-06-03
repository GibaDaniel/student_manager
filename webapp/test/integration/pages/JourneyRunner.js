sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zcfstudentapp/test/integration/pages/StudentList",
	"zcfstudentapp/test/integration/pages/StudentObjectPage"
], function (JourneyRunner, StudentList, StudentObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zcfstudentapp') + '/test/flp.html#app-preview',
        pages: {
			onTheStudentList: StudentList,
			onTheStudentObjectPage: StudentObjectPage
        },
        async: true
    });

    return runner;
});

