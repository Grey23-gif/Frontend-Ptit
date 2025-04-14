import java.awt.*;
import javax.swing.*;

public class EX71_N24DTCN108 {
    public static void main(String[] args) {
        // Tạo frame chính
        JFrame frame = new JFrame("HelloFrame");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);
        frame.setLocationRelativeTo(null); // căn giữa màn hình

        // Tạo panel để chứa các thành phần
        JPanel panel = new JPanel();
        panel.setLayout(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        gbc.fill = GridBagConstraints.HORIZONTAL;

        // Label và TextField cho User name
        JLabel userLabel = new JLabel("User name:");
        JTextField userField = new JTextField(15);
        gbc.gridx = 0;
        gbc.gridy = 0;
        panel.add(userLabel, gbc);
        gbc.gridx = 1;
        panel.add(userField, gbc);

        // Label và TextField cho Phone number
        JLabel phoneLabel = new JLabel("Phone number:");
        JTextField phoneField = new JTextField(15);
        gbc.gridx = 0;
        gbc.gridy = 1;
        panel.add(phoneLabel, gbc);
        gbc.gridx = 1;
        panel.add(phoneField, gbc);

        // Nút Save
        JButton saveButton = new JButton("Save");
        gbc.gridx = 0;
        gbc.gridy = 2;
        gbc.gridwidth = 2; // Chiếm 2 cột
        gbc.anchor = GridBagConstraints.CENTER;
        panel.add(saveButton, gbc);

        // Thêm panel vào frame
        frame.add(panel);
        
        // Thêm ActionListener cho nút Save
        saveButton.addActionListener(e -> {
            String userName = userField.getText();
            String phoneNumber = phoneField.getText();
            JOptionPane.showMessageDialog(frame, "Saved:\nUser Name: " + userName + "\nPhone Number: " + phoneNumber);
        });

        frame.setVisible(true);
    }
}
