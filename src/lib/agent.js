/**
 * NGS Agent Automation Utility
 * This simulates the backend agent logic for auto-confirming entries
 * based on predefined rules.
 */

export const validateStaffEntry = async (staffId) => {
    // Simulating a database lookup and rule check
    return new Promise((resolve) => {
        setTimeout(() => {
            // In a real app, this would check against the 'staff_entries' or 'employees' table
            const validIds = ['EMP001', 'EMP002', 'EMP042', 'EMP100'];

            if (validIds.includes(staffId)) {
                resolve({
                    status: 'Auto-confirmed',
                    message: 'Employee verified. Entry logged.',
                    details: { name: 'Verified Staff Member', role: 'Staff' }
                });
            } else {
                resolve({
                    status: 'Exception',
                    message: 'Employee ID not found. Routing to manual approval.',
                    details: null
                });
            }
        }, 800);
    });
};

export const validateVisitorEntry = async (visitorData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Rule: Pre-registered visitors with matching ID are auto-approved
            if (visitorData.type === 'Pre-registered' && visitorData.id) {
                resolve({
                    status: 'Auto-confirmed',
                    message: 'Pre-registered visitor match found.'
                });
            } else {
                resolve({
                    status: 'Pending',
                    message: 'Manual confirmation required for walk-in/non-matched visitor.'
                });
            }
        }, 1000);
    });
};
