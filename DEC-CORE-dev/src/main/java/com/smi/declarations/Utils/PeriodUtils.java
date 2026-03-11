package com.smi.declarations.Utils;

import java.time.LocalDate;

public class PeriodUtils {

    public static String generatePeriodDec(LocalDate startDate, String periodicity, int periodIndex) {
        LocalDate targetDate = switch (periodicity.toUpperCase()) {
            case "MONTHLY" -> startDate.plusMonths(periodIndex);
            case "QUARTERLY" -> startDate.plusMonths(3L * periodIndex);
            case "DAILY" -> startDate.plusDays(periodIndex);
            case "FORTNIGHT" -> startDate.plusDays(15L * periodIndex);
            default -> throw new IllegalArgumentException("Unsupported periodicity: " + periodicity);
        };

        String month = String.format("%02d", targetDate.getMonthValue());
        String year = String.valueOf(targetDate.getYear());
        return month + year; // format MMYYYY
    }
}
