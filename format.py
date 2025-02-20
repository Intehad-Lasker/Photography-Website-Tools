def format_ids(input_filename, output_filename):
    with open(input_filename, 'r') as file:
        lines = file.read().splitlines()
    
    formatted_output = ',\n    '.join(f'"{line}"' for line in lines)
    
    with open(output_filename, 'w') as file:
        file.write(formatted_output)
    
    print(f"Formatted data saved to {output_filename}")

# Example usage
input_file = "input.txt"  # Replace with your actual input file
output_file = "formatted_output.txt"  # Replace with your desired output file
format_ids(input_file, output_file)
