// src/api/audit.js
import { AUDIT_LOG, FOLLOWUP_HISTORY } from "../data/mockData";

export const getAuditLog = async () => AUDIT_LOG;

export const getFollowUpHistory = async (contactName) =>
  contactName
    ? FOLLOWUP_HISTORY.filter((r) => r.contact === contactName)
    : FOLLOWUP_HISTORY;